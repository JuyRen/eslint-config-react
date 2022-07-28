export default 2;

Promise.resolve().then((res) => {
  console.log(res);
});

async function foo(params: any) {
  try {
    const res = await Promise.reject(Error("1"));

    throw Error("2");
  } catch (err) {
    console.log(err);
  }
}
