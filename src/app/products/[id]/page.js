const DynaminRoute = ({ params, searchParams }) => {
  //   console.log(params);
  return (
    <div>
      <h1> This is Dynamic page {params.id}</h1>
      <h1>
        {" "}
        The Search Term is {searchParams.cat} and Price {searchParams.price}
      </h1>
    </div>
  );
};

export default DynaminRoute;
