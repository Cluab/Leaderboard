const URl = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/FvdD13u2sOwTjQITHHyZ/scores';
// assigning the api to a verbal
export default class Post {
  static addSomethingAsync = async (data1, data2) => {
    const payloadObject = {
      user: data1,
      score: data2,
    };
    // awaits execution until the returned promise is fulfilled or rejected.
    await fetch(URl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payloadObject),
    })
      .then((res) => res.json())
      .then((data) => data)
      // if responded with an error
      .catch((error) => new Error(error));
  };
}

export { URl };
