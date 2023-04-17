const ProcessItem = ({ item: { description, title }, index }: ProcessItem) => {
  return (
    <div className="py-5">
      <p className="mb-5">
        <span className="text-gray-light mr-1">00/{index + 1}</span>
        {title}
      </p>
      <p className="text-xl text-gray-light">{description}</p>
    </div>
  );
};

export default ProcessItem;

type ProcessItem = {
  item: {
    description: string;
    title: string;
  };
  index: number;
};
