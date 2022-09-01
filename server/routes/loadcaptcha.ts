export default defineEventHandler((event) => {
  const captchaTxt = Math.random().toString(10).slice(2, 6).toUpperCase();
  return captchaTxt;
  
})