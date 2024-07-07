import AnimatedButton from "./AnimatedButton";

const WelcomeScreen = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      <h1>WelcomeScreen</h1>
      <div className="flex gap-4">
        <AnimatedButton onClick={() => console.log("Button clicked")}>Français</AnimatedButton>
        <AnimatedButton onClick={() => console.log("Button clicked")}>English</AnimatedButton>
      </div>
    </div>
  );
};

export default WelcomeScreen;
