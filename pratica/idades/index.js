const dataMain = new Date();

const anoNasc = 2004;
const mesNasc = 7;
const diaNasc = 11;

const anoAtual = dataMain.getFullYear();
const mesAtual = 4;
const diaAtual = dataMain.getDate();
console.log(2024 - 2007);

let idade = anoAtual - anoNasc;
let iF = null;
let mF = null;
let dF = 0;

function validarIdade() {
  if (mesNasc != mesAtual) {
    iF = idade - 1;
  } else {
    iF = idade;
  }
  if (iF == idade - 1) {
    mF = 12 - mesNasc + mesAtual;
  } else {
    if (mesNasc > mesAtual) {
      mF = mesNasc - mesAtual;
    } else {
      mF = mesAtual - mesNasc;
    }
  }
  if (
    mesNasc - mesAtual == 0 ||
    (mesAtual - mesNasc == 0 && diaAtual == diaNasc)
  ) {
    console.log("Feliz Aniversário!");
  }
  if (mesNasc == mesAtual - 1 && diaAtual != diaNasc) {
    if (mesNasc % 2 == 0) {
      dF = 30 - diaNasc + diaAtual;
      if (dF > 30) {
        dF = 30 - dF;
        mF++;
      }
    } else if (mesNasc % 2 != 0) {
      dF = 30 - diaNasc + diaAtual;
      if (dF > 30) {
        dF = (30 - dF) * -1;
        mF++;
      }
    }
  }
  if (mesNasc == mesAtual - 1 && diaAtual == diaNasc) {
    dF = 0;
  }
  if (mesNasc == mesAtual - 1 && diaAtual < diaNasc) {
    dF = diaNasc - diaAtual;
  }
  if (mesNasc != mesAtual - 1 && diaAtual > diaNasc) {
    dF = diaAtual - diaNasc;
  }
  if (mesNasc != mesAtual - 1 && diaAtual < diaNasc) {
    dF = diaNasc - diaAtual;
  }
  if (mF > 12) {
    mF = (12 - mF) * -1;
    iF++;
  }
  iF = iF < 10 ? "0" + iF : iF;
  mF = mF < 10 ? "0" + mF : mF;
  dF = dF < 10 ? "0" + dF : dF;

  return `Você tem ${iF} anos,${mF} meses e ${dF} dias`;
}

console.log(validarIdade());
