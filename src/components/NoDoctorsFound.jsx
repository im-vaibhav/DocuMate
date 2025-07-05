const NoDoctorsFound = () => {
  return (
    <div className="w-full py-10 text-center text-gray-600">
      <h2 className="text-xl font-semibold mb-2">No Doctors Found</h2>
      <p className="text-sm">
        We currently don't have any doctors available for this specialty.
      </p>
      <p className="text-sm">
        We're working hard to bring more experts on board soon.
      </p>
    </div>
  );
};

export default NoDoctorsFound;
