import { ChildAsFC } from './Child';

const Parent = () => {
  return (
    <ChildAsFC color="red" onClick={() => console.log('Clicked')}>
      alsdkf
    </ChildAsFC>
  );
};

export default Parent;
