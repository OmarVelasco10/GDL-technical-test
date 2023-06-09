


export const useNewFormat = (value: string) => {
        
// Number without format
let number = value;

// Apply the desired format
let newFrom = "(" + number.substring(0, 3) + ") " + number.substring(3, 6) + " - " + number.substring(6);

// let newFrom = "(" + number.substring(0, 3) + ") " + number.substring(3, 6) + " - " + number.substring(6);
  return {
    newFrom
  }
}
