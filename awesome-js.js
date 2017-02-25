awesome-js
function SpecificError () {

}

SpecificError.prototype = new Error();

// ...
try {
  throw new SpecificError;
} catch (e) {
  if (e instanceof SpecificError) {
   // specific error
  } else {
    throw e; // let others bubble up
  }
}
