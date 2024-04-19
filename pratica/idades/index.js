const dataMain = new Date();

const anoNasc = 2007;
const mesNasc = 12;
const diaNasc = 24;

const anoAtual = dataMain.getFullYear();
const mesAtual = 4;
const diaAtual = 19;

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
    mF = (12 - mesNasc) + mesAtual;
  } else{
    if (mesNasc > mesAtual) {
      mF = mesNasc - mesAtual;
    } else {
      mF = mesAtual - mesNasc;
    }
  }
  if (diaNasc != diaAtual) {
    if (diaNasc > diaAtual) {
      dF = diaNasc - diaAtual;
    } else {
      dF = diaAtual - diaNasc;
    }
  }
  if (mF > 12) {
    mF = (12 - mF)*(-1);
    iF++;
  }

  return `Você tem ${iF} anos,${+mF} meses e ${dF} dias`;
}

console.log(validarIdade());
