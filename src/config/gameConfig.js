const params = new URLSearchParams(window.location.search);

export const gameConfig = {
  containerNode: document.querySelector("#app"),
  width: 1920,
  height: 1080,
  canvasColor: "#D9D9D9",
  collisions: {
    collisionMatrix: [],
  },
  debug: {
    colliders: Boolean(Number(params.get("debug"))),
    mousePosition: Boolean(Number(params.get("debug"))),
  },
};
