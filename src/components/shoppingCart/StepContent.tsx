import Cart from "./Cart"

type Props = {
    currentStep: number
}

export default function StepContent({ currentStep }: Props) {
    return (
        <div
            key={currentStep}
            className="animate-fade-in"
        >
            {currentStep === 1 && (
                <Cart />
            )}

            {currentStep === 2 && (
                <div>
                    <h2 className="text-lg font-semibold mb-4">آدرس</h2>
                    <p>فرم آدرس اینجا قرار می‌گیرد</p>
                </div>
            )}

            {currentStep === 3 && (
                <div>
                    <h2 className="text-lg font-semibold mb-4">پرداخت</h2>
                    <p>مرحله پرداخت</p>
                </div>
            )}
        </div>
    )
}
