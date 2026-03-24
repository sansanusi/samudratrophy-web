type SpinnerProps = {
    size?: "sm" | "md" | "lg";
    className?: string;
};

const sizeMap = {
    sm: "w-5 h-5 border-2",
    md: "w-8 h-8 border-3",
    lg: "w-10 h-10 border-4",
};

export default function Spinner({
    size = "lg",
    className = "",
}: SpinnerProps) {
    return (
        <div className={`flex items-center justify-center min-h-[57.7vh] ${className}`}>
            <div
                className={`${sizeMap[size]} border-gray-300 border-t-e-primary rounded-full animate-spin`}
            />
        </div>
    );
}