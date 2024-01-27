function Home() {
  return (
    <div
      className="container d-flex flex-column align-items-center justify-content-center"
      style={{ height: "100vh" }}
    >
      <h1 className="mb-5">Choose category</h1>
      <a
        href="/breeds"
        type="button"
        className="btn btn-secondary mx-auto col-2 mb-5 btn-lg"
      >
        Breeds
      </a>
      <a
        href="/users"
        type="button"
        className="btn btn-secondary mx-auto col-2 mb-5 btn-lg"
      >
        Users
      </a>
      <a
        href="/pets"
        type="button"
        className="btn btn-secondary mx-auto col-2 mb-5 btn-lg"
      >
        Pets
      </a>
    </div>
  );
}

export default Home;
