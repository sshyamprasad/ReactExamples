export const Application = () => {
  return (
    <form>
      <div>
        <h1>Application Form</h1>
        <h2>Please fill your details</h2>
        <p>All fields are mandatory</p>
      </div>
      <div>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" />
      </div>
      <div>
        <label htmlFor="bio">Bio</label>
        <textarea type="textarea" id="bio" />
      </div>

      <div>
        <label htmlFor="conditions">
          <input type="checkbox" id="conditions" />
          Please accept terms and conditions
        </label>
      </div>
    </form>
  );
};
