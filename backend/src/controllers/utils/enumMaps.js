// Maps raw string values (from frontend/seed) to Prisma enum keys
const methodMap = { "Correo-E": "CorreoE", "E-mail": "Email", "Llamada": "Llamada", "Call": "Call" };
const stateMap = { "Pendiente": "Pendiente", "Concretado": "Concretado", "Earring": "Earring", "Concretized": "Concretized" };

// Reverse maps: Prisma enum keys back to display strings
const methodReverse = { "CorreoE": "Correo-E", "Email": "E-mail", "Llamada": "Llamada", "Call": "Call" };
const stateReverse = { "Pendiente": "Pendiente", "Concretado": "Concretado", "Earring": "Earring", "Concretized": "Concretized" };

const mapMethod = (val) => methodMap[val] || val;
const mapState = (val) => stateMap[val] || val;
const unmapMethod = (val) => methodReverse[val] || val;
const unmapState = (val) => stateReverse[val] || val;

module.exports = { mapMethod, mapState, unmapMethod, unmapState };
