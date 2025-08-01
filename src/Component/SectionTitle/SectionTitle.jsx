const SectionTitle = ({ heading, subHeading }) => {
  return (
    <div className="mx-auto text-center w-11/12 md:w-4/12 mb-8">
      <p className="text-yellow-600 mb-2">{subHeading}</p>
      <h3 className="text-2xl md:text-3xl uppercase border-y-4 py-4">
        {heading}
      </h3>
    </div>
  );
};

export default SectionTitle;
