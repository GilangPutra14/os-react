import React from "react";

const Header = (props) => {
  return (
    <div>
      <h2>Halaman Header</h2>
      <h2> </h2>
      <p>Nilai ini ditampilkan dari props: {props.judul}</p>
      <p> Nama Saya : {props.nama} </p>
    </div>
  );
};
export default Header;
