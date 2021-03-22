import FirstStep from "./FirstStep";
import SecondStep from "./SecondStep";
import ThirdStep from "./ThirdStep";

export const getSteps = () => {
  return ['Title and description', 'Add images', 'Add comments'];
}

export const getStepContent = (stepIndex) => {
  switch (stepIndex) {
    case 0:
      return <FirstStep />;
    case 1:
      return <SecondStep />;
    case 2:
      return <ThirdStep />;
    default:
      return 'Unknown stepIndex';
  }
}

export default {getSteps, getStepContent}


