import { useState } from 'react';
import { GoogleGenerativeAI } from "@google/generative-ai";
import HeaderContent from '../components/HeaderContent/HeaderContent';
import MainContent from "../components/MainContent/MainContent";




const Workout = () => {
    const [goal, setGoal] = useState('');
    const [days, setDays] = useState(4);
    const [age, setAge] = useState('');
    const [gender, setGender] = useState('');
    const [fitnessLevel, setFitnessLevel] = useState('');
    const [bodyComposition, setBodyComposition] = useState('');
    const [previousInjuries, setPreviousInjuries] = useState('');
    const [focusAreas, setFocusAreas] = useState('');
    const [workoutPlan, setWorkoutPlan] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [notes, setNotes] = useState('');
    const [specialNotes, setSpecialNotes] = useState('');
    const [bodyWeight, setBodyWeight] = useState('');
    
    
    const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GOOGLE_API_KEY);// Replace with your actual API key
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');
        setWorkoutPlan([]);
        setNotes('');
        setSpecialNotes('');

        try {
            const prompt = `Create a ${days}-day workout plan for ${goal} considering the following:
            - Age: ${age}
            - Gender: ${gender}
            - Current Fitness Level: ${fitnessLevel}
            - Body Composition: ${bodyComposition}
            - Previous Injuries: ${previousInjuries}
            - Focus Areas: ${focusAreas}
            
            Provide it in a structured format with headers when starting a new day, like:
            
            Day | Exercise | Sets | Reps | Rest (min)

            Important notes:
            - Add Day Number every exercise
            - Include warm-up and cool-down details.
            - Separate additional notes without mixing them into the table.`;

            const result = await model.generateContent(prompt);
            const planText = result.response.text();

            const lines = planText.split('\n');
            const formattedPlan = [];
            const additionalNotes = [];
            let currentTable = null;

lines.forEach(line => {
    if (line.match(/^\|\s*Day/)) {
        if (currentTable && currentTable.rows.length > 0) {
            formattedPlan.push(currentTable);
        }
        currentTable = {
            header: line.split('|').map(cell => cell.trim()).filter(Boolean),
            rows: []
        };
    } else if (line.match(/\|/)) {
        const row = line.split('|').map(cell => cell.trim()).filter(Boolean);
        currentTable?.rows.push(row);
    } else if (line) {
        additionalNotes.push(line.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')); // Updated this line
    }
});

            
            if (currentTable && currentTable.rows.length > 0) {
                formattedPlan.push(currentTable);
            }

            setWorkoutPlan(formattedPlan);
            setSpecialNotes(additionalNotes.join('\n'));

        } catch (err) {
            setError('Error: ' + err.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <><HeaderContent/>
        <MainContent>
        <div 
             className="
             min-h-screen 
             p-5 
             bg-gradient-to-r 
             from-yellow-400 
             via-green-400 
             to-yellow-400 
             animate-gradient-x
             bg-[length:200%_200%]
             animate-gradient-invert
             "
           // Use the imported variable
        >
      
      <div className="max-w-2xl mx-auto bg-white bg-opacity-70 backdrop-blur-xl rounded-lg shadow-2xl p-8 mt-20">
    <h2 className="text-4xl font-bold text-center mb-6 text-gray-800">Generate Workout Plan</h2>
    <form onSubmit={handleSubmit} className="space-y-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <label className="block">
                <span className="text-gray-700 font-semibold">Target Goal:</span>
                <select
                    value={goal}
                    onChange={(e) => setGoal(e.target.value)}
                    className="mt-2 block w-full border-gray-300 rounded-md shadow-sm focus:border-green-500 focus:ring focus:ring-green-300 transition duration-300"
                    required
                >
                    <option value="">Select a goal</option>
                    <option value="muscle gain">Muscle Gain</option>
                    <option value="weight loss">Weight Loss</option>
                    <option value="endurance">Endurance</option>
                    <option value="general fitness">General Fitness</option>
                </select>
                <p className="text-sm text-gray-500 mt-1">Choose your workout objective.</p>
            </label>

            <label className="block">
                <span className="text-gray-700 font-semibold">Workout Days per Week:</span>
                <input
                    type="number"
                    value={days}
                    onChange={(e) => setDays(e.target.value)}
                    min="1"
                    max="7"
                    className="mt-2 block w-full border-gray-300 rounded-md shadow-sm focus:border-green-500 focus:ring focus:ring-green-300 transition duration-300"
                    required
                />
                <p className="text-sm text-gray-500 mt-1">Days you can dedicate weekly.</p>
            </label>

            <label className="block">
                <span className="text-gray-700 font-semibold">Age:</span>
                <input
                    type="number"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                    className="mt-2 block w-full border-gray-300 rounded-md shadow-sm focus:border-green-500 focus:ring focus:ring-green-300 transition duration-300"
                    required
                />
                <p className="text-sm text-gray-500 mt-1">Your age affects recovery and intensity.</p>
            </label>

            <label className="block">
                <span className="text-gray-700 font-semibold">Gender:</span>
                <select
                    value={gender}
                    onChange={(e) => setGender(e.target.value)}
                    className="mt-2 block w-full border-gray-300 rounded-md shadow-sm focus:border-green-500 focus:ring focus:ring-green-300 transition duration-300"
                    required
                >
                    <option value="">Select your gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                </select>
                <p className="text-sm text-gray-500 mt-1">Gender can influence workout design.</p>
            </label>

            <label className="block">
                <span className="text-gray-700 font-semibold">Current Fitness Level:</span>
                <select
                    value={fitnessLevel}
                    onChange={(e) => setFitnessLevel(e.target.value)}
                    className="mt-2 block w-full border-gray-300 rounded-md shadow-sm focus:border-green-500 focus:ring focus:ring-green-300 transition duration-300"
                    required
                >
                    <option value="">Select fitness level</option>
                    <option value="beginner">Beginner</option>
                    <option value="intermediate">Intermediate</option>
                    <option value="advanced">Advanced</option>
                </select>
                <p className="text-sm text-gray-500 mt-1">Your experience level.</p>
            </label>

            <label className="block">
                <span className="text-gray-700 font-semibold">Body Weight (kg):</span>
                <input
                    type="number"
                    value={bodyWeight}
                    onChange={(e) => setBodyWeight(e.target.value)}
                    className="mt-2 block w-full border-gray-300 rounded-md shadow-sm focus:border-green-500 focus:ring focus:ring-green-300 transition duration-300"
                    required
                />
                <p className="text-sm text-gray-500 mt-1">Helps to calculate intensity and volume.</p>
            </label>

            <label className="block">
                <span className="text-gray-700 font-semibold">Body Composition:</span>
                <input
                    type="text"
                    value={bodyComposition}
                    onChange={(e) => setBodyComposition(e.target.value)}
                    className="mt-2 block w-full border-gray-300 rounded-md shadow-sm focus:border-green-500 focus:ring focus:ring-green-300 transition duration-300"
                    placeholder="e.g., 20% body fat"
                />
                <p className="text-sm text-gray-500 mt-1">Details like fat percentage or muscle mass.</p>
            </label>

            <label className="block">
                <span className="text-gray-700 font-semibold">Previous Injuries:</span>
                <input
                    type="text"
                    value={previousInjuries}
                    onChange={(e) => setPreviousInjuries(e.target.value)}
                    className="mt-2 block w-full border-gray-300 rounded-md shadow-sm focus:border-green-500 focus:ring focus:ring-green-300 transition duration-300"
                    placeholder="e.g., knee, back"
                />
                <p className="text-sm text-gray-500 mt-1">Mention injuries for customized plan adjustments.</p>
            </label>

            <label className="block">
                <span className="text-gray-700 font-semibold">Primary Focus Areas:</span>
                <input
                    type="text"
                    value={focusAreas}
                    onChange={(e) => setFocusAreas(e.target.value)}
                    className="mt-2 block w-full border-gray-300 rounded-md shadow-sm focus:border-green-500 focus:ring focus:ring-green-300 transition duration-300"
                    placeholder="e.g., arms, core, legs"
                />
                <p className="text-sm text-gray-500 mt-1">Specific muscle groups to focus on.</p>
            </label>
        </div>

        <button
            type="submit"
            className="w-full py-3 mt-6 font-semibold text-white bg-gradient-to-r from-green-500 to-blue-500 rounded-lg shadow-md hover:from-green-600 hover:to-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-all duration-300 "
        >
            Generate Workout Plan
        </button>
    </form>
                                    {loading && <p className="text-center text-gray-500">Loading...</p>}
            {error && <p className="text-red-500 text-center">{error}</p>}

            {workoutPlan.length > 0 && (
                <div className="mt-5">
                    <h3 className="text-xl font-semibold">Your Workout Plan:</h3>
                    {workoutPlan.map((table, index) => (
                        <div key={index} className="mt-4">
                            <h4 className="text-lg font-semibold">{table.header.join(' | ')}</h4>
                            <table className="min-w-full border-collapse border border-gray-300 mt-2">
                                <thead>
                                    <tr>
                                        {table.header.map((headerCell, i) => (
                                            <th key={i} className="border border-gray-300 p-2">{headerCell}</th>
                                        ))}
                                    </tr>
                                </thead>
                                <tbody>
                                    {table.rows.map((row, i) => (
                                        <tr key={i}>
                                            {row.map((cell, j) => (
                                                <td key={j} className="border border-gray-300 p-2" dangerouslySetInnerHTML={{ __html: cell.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }}></td>
                                            ))}
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    ))}
                    {specialNotes && (
    <div className="mt-4">
        <h4 className="text-lg font-semibold">Additional Notes:</h4>
        <div dangerouslySetInnerHTML={{ __html: specialNotes }} className="whitespace-pre-line"></div>
    </div>
)}

                </div>
            )}
        </div>
    </div>
    </MainContent>
    
    </>
);
};


export default Workout;
