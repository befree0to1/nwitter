// import React, { useEffect } from "react";
// import Nweet from "../components/Nweet";
// import { useState } from "react";
// import { dbService } from "../fbase";
// // import { v4 as uuidv4 } from "uuid";
// // import { ref, uploadString, getDownloadURL } from "firebase/storage";
// import {
//   collection,
//   // addDoc,
//   // serverTimestamp,
//   query,
//   onSnapshot,
//   orderBy,
// } from "firebase/firestore";
// import NweetFactory from "../components/NweetFactory";

// const Home = ({ userObj }) => {
//   // const [nweet, setNweet] = useState("");
//   const [nweets, setNweets] = useState([]);
//   // const [attachment, setAttachment] = useState("");

//   useEffect(() => {
//     const q = query(
//       collection(dbService, "nweets"),
//       orderBy("createdAt", "desc")
//     );
//     onSnapshot(q, (snapshot) => {
//       const nweetArr = snapshot.docs.map((doc) => ({
//         id: doc.id,
//         ...doc.data(),
//       }));
//       setNweets(nweetArr);
//     });
//   }, []);

//   // const onSubmit = async (e) => {
//   //   e.preventDefault();
//   //   let attachmentUrl = "";
//   //   if (attachment !== "") {
//   //     const attachmentRef = ref(storageService, `${userObj.uid}/${uuidv4()}`);
//   //     const response = await uploadString(
//   //       attachmentRef,
//   //       attachment,
//   //       "data_url"
//   //     );
//   //     attachmentUrl = await getDownloadURL(response.ref); //promise는 날 기다려줘를 의미한다
//   //   }
//   //   const nweetObj = {
//   //     text: nweet,
//   //     createdAt: serverTimestamp(),
//   //     creatorId: userObj.uid,
//   //     attachmentUrl,
//   //   };
//   //   await addDoc(collection(dbService, "nweets"), nweetObj);
//   //   setNweet("");
//   //   setAttachment("");
//   // };

//   // const onChange = (e) => {
//   //   const {
//   //     target: { value },
//   //   } = e;
//   //   setNweet(value);
//   // };

//   // const onFileChange = (event) => {
//   //   const {
//   //     target: { files },
//   //   } = event;
//   //   const theFile = files[0];
//   //   const reader = new FileReader();
//   //   reader.onloadend = (finishedEvent) => {
//   //     const {
//   //       currentTarget: { result },
//   //     } = finishedEvent;
//   //     setAttachment(result);
//   //   };
//   //   reader.readAsDataURL(theFile);
//   // };
//   // const onClearAttachment = () => {
//   //   setAttachment("");
//   // };

//   return (
//     <div>
//       <NweetFactory userObj={userObj} />
//       {/* <form onSubmit={onSubmit}>
//         <input
//           value={nweet}
//           type="text"
//           onChange={onChange}
//           placeholder="What's on your mind?"
//           maxLength={120}
//         />
//         <input type="file" accept="image/*" onChange={onFileChange} />
//         <input type="submit" value="Nweet" />
//         {attachment && (
//           <div>
//             <img src={attachment} width="50px" height="50px" alt="profile" />
//             <button onClick={onClearAttachment}>Clear</button>
//           </div>
//         )}
//       </form> */}
//       <div>
//         {nweets.map((nweet) => (
//           <Nweet
//             key={nweet.id}
//             nweetObj={nweet}
//             isOwner={nweet.creatorId === userObj.uid}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Home;
