const URl = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/FvdD13u2sOwTjQITHHyZ/scores';
export default class Post {
  static addSomethingAsync = async (data1, data2) => {
    const payloadObject = {
      user: data1,
      score: data2,
    };

    await fetch(URl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payloadObject),
    })
      .then((res) => res.json())
      .then((data) => data)
      .catch((error) => new Error(error));
  };
}

export { URl };
