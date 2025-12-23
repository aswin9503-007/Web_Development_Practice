const user = {
  name: "Aswin",
  phone: "+12 334433234",
  address: "123 govindha street",
};

export default function Profile() {
  return (
    <>
      <h1>Contact</h1>
      <p>
        Name: {user.name} <br />
        Phone: {user.phone} <br />
        Address: {user.address}
      </p>
    </>
  );
}
