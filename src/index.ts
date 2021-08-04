const CPF_LENGTH = 11;
const FACTOR_DIGIT_1 = 10;
const FACTOR_DIGIT_2 = 11;

function clearCPF(cpf: string) {
  return cpf
    .replace(".", "")
    .replace(".", "")
    .replace("-", "")
    .replace(" ", "");
}

function numbersAreAllEquals(cpf: string) {
	const [digit1] = cpf
  return cpf.split("").every((digit) => digit === digit1);
}

function isInvalidLength(cpf: string){
	return cpf.length !== CPF_LENGTH
}

function calculateDigit(cpf: string, factor: number, max: number){
	let total = 0;
	for(const digit of cpf.split("").slice(0,max)){
		total += parseInt(digit) * factor--; 
	}
	const rest = total%11;
	const digit = (rest<2) ? 0 : 11 - rest;
	return digit;
}

function extractCheckerDigit(cpf: string){
	return 	cpf.slice(9);
}

export function validate(cpf: string) {
  if (!cpf) {
    return false;
  }
  cpf = clearCPF(cpf);
  if (isInvalidLength(cpf)) {
    return false;
  }
  if (numbersAreAllEquals(cpf)) {
    return false;
  }
	const dg1 = calculateDigit(cpf, FACTOR_DIGIT_1, 9);
	const dg2 = calculateDigit(cpf, FACTOR_DIGIT_2, 10);
	let checkerDigit = extractCheckerDigit(cpf);
  let nDigResult = `${dg1}${dg2}`;
  return checkerDigit == nDigResult;
}
