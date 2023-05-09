const { Nama, TanggalLahir, TempatLahir, Alamat } = require("./biodata");

function run() {
  let nama = "Vikhrama";
  let tglLahir = "24 Januari 2004";
  let tmpLahir = "Ciamis";
  let alamat = "Ciamis";

  console.log(Nama(nama));
  console.log(TempatLahir(tmpLahir));
  console.log(TanggalLahir(tglLahir));
  console.log(Alamat(alamat));
}

run();
