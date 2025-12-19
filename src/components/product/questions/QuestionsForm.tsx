import QuestionsList from "./QuestionsList"

function QuestionsForm() {
    return (
        <div className="flex flex-col gap-6">
            <form className="flex flex-col gap-3">
                <label htmlFor="question">سوال:</label>
                <textarea rows={6} className="w-full bg-gray-50 rounded-lg border border-gray-200 p-2 placeholder:text-sm" placeholder="متن سوال" id="question"></textarea>
            </form>

            <button className="bg-sky-600 text-white px-20 py-3 font-medium w-full md:w-fit rounded-lg cursor-pointer">ثبت سوال</button>

            <hr className="text-gray-300"/>

            <QuestionsList />
        </div>
    )
}

export default QuestionsForm
