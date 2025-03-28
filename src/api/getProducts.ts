export async function getProducts() {
  const res = await fetch('https://script.google.com/macros/s/AKfycbzZvTF0Urf8hICBU5vZEK71zhexUbClBFGj211k_trsSivspRr2klQcGCu13islBgMPSQ/exec')
  const data = await res.json()
  return data
}


