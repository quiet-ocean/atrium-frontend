const CONTRACT_ID = process.env.REACT_APP_CONTRACT_ID || 'atrium-contract';
interface CWindow extends Window {
  near: any;
}

declare let window: CWindow;
export const loginSender = async () => {
  if(!window.near) {
    console.log('you should install sender wallet');
    return;
  }
  await window.near.requestSignIn({
    contractId: CONTRACT_ID, // contract requesting access
  });
  
  // Or add `methodNames` if you only allow the key to call some of the methods
  
  await window.near.requestSignIn({
    contractId: CONTRACT_ID, // contract requesting access
    methodNames: ["addMessage"]       // (optional) changed methods the app allowed to use
  });
  
  window.near.isSignedIn()   // t
}
export const logoutSender = async () => {
  if(window.near.isSignedIn()) {
    window.near.signOut();    // true
  }   // false
}