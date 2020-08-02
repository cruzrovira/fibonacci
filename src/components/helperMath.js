export const fibonacci = (nIterations) => {
  let reply = [];
  reply.push([1, 0]);

  if (nIterations === 1) {
    return reply;
  }
  reply.push([2, 1]);
  if (nIterations === 2) {
    return reply;
  }

  for (let i = 3; i <= nIterations; i++) {
    reply.push([i, reply[i - 2][1] + reply[i - 3][1]]);
  }
  return reply;
};
