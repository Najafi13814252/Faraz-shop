import QuestionsForm from "./QuestionsForm"

function QuetionsBox() {
    return (
        <div className="detail-box p-4">
            <div className="mb-6">
                <h2 className="detail-title mb-4">سوالات شما</h2>
                <p className="text-gray-500 text-sm">برای ثبت نظر، از طریق دکمه افزودن دیدگاه جدید استفاده نمایید. اگر این محصول را قبلا خریده باشید، نظر شما به عنوان خریدار ثبت خواهد شد.</p>
            </div>

            <section>
                <QuestionsForm />
            </section>
        </div>
    )
}

export default QuetionsBox
