import { React, useState } from 'react';
import "./App.css";


function App() {
  const [fname, setfname] = useState("");
  const [lname, setlname] = useState("");
  const [email, setemail] = useState("");
  const [contact, setcontact] = useState("");
  const [gender, setGender] = useState("male");
  const [subject, setSubject] = useState({
    english: true,
    maths: false,
    physics: false,
  });
  const [url, seturl] = useState("");
  const [choice, setchoice] = useState("");
  const [about, setabout] = useState("");
  const [resume, setresume] = useState("");
  const handleSubjectChange = (sub) => {
    setSubject((prev) => ({
      ...prev,
      [sub]: !prev[sub],
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(
      fname,
      lname,
      email,
      contact,
      gender,
      choice,
      subject,
      resume,
      url,
      about
    );
  };
  // Add your form submission logic here
  const handleReset = () => {
    // Reset all state variables here

    setfname("");
    setlname("");
    setemail("");
    setcontact("");
    setGender("male");
    setSubject({
      english: true,
      maths: false,
      physics: false,
    });
    setresume("");
    seturl("");
    setchoice("");
    setabout("");
  };




  return (
    <div className="App">
      <h1> Application for Software Engineer </h1>
      <fieldset>
{/* firstname */}
        <form action="#" method="get">
          <label for="fname">First Name : </label>
          <input type="text"
            name="fname"
            id="fname"
            value={fname}
            onChange={(e) => setfname(e.target.value)}
            placeholder="enter your first name" required
          />
{/* lastname */}
          <label for="lname">Last Name : </label>
          <input type="text" id="lname" name="lname"
            value={lname}
            onChange={(e) => setlname(e.target.value)}
            placeholder="enter your last name" required />
{/* email */}
          <label for="email">Email : </label>
          <input type="email" id="email" name="email"
            value={email}
            onChange={(e) => setemail(e.target.value)}
            placeholder="enter your email" required />
{/* phoneno */}
          <label for="tel">contact : </label>
          <input type="tel" id="contact" name="contact"
            value={contact}
            onChange={(e) => setcontact(e.target.value)}
            placeholder="enter your contact no" required />
{/* select gender */}
          <label for="gender">Gender*</label>
          <input
            type="radio"
            name="gender"
            value="male"
            id="male"
            checked={gender === "male"}
            onChange={(e) =>
              setGender(e.target.value)
            }
          />
          Male
          <input
            type="radio"
            name="gender"
            value="female"
            id="female"
            checked={gender === "female"}
            onChange={(e) =>
              setGender(e.target.value)
            }
          />
          Female
          <input
            type="radio"
            name="gender"
            value="other"
            id="other"
            checked={gender === "other"}
            onChange={(e) =>
              setGender(e.target.value)
            }
          />Other
{/* slect subject */}
          <label for="subject">Subject :</label>
          <input type="checkbox"
            name="lang"
            id="english"
            checked={subject.english === true}
            onChange={(e) => handleSubjectChange("english")} />
          English
          <input type="checkbox"
            name="lang"
            id="physics"
            checked={subject.physics === true}
            onChange={(e) => handleSubjectChange("physics")} />
          Physics
          <input type="checkbox"
            name="lang"
            id="maths"
            checked={subject.maths === true}
            onChange={(e) => handleSubjectChange("maths")} />
          Maths
{/* upload resume */}
          <label for="file">Upload Resume*</label>
          <input
            type="file"
            name="file"
            id="file"
            onChange={(e) =>
              setresume(e.target.files[0])
            }
            placeholder="Enter Upload File"
            required
          />
          {/* url */}
          <label for="url">Linkedin url* </label>
          <input type="url"
            name="url"
            value={url}
            id="url"
            onChange={(e) => seturl(e.target.url)}
            placeholder='your Linkedin profile'
          />
{/* select skills   */}
          <label>select the option</label>
          <select name="select" id="select" value={choice}
            onChange={(e) => setchoice(e.target.value)}>

            <option value=""
              disabled
              selected={choice === ""}>Select your ans
            </option>

            <optgroup label='beginner'>
              <option value="1">HTML</option>
              <option value="2">CSS</option>
              <option value="3">Javascript</option>
            </optgroup>

            <optgroup label='advance'>
              <option value="4">React</option>
              <option value="5">NodeJS</option>
              <option value="6">Express</option>
            </optgroup>
          </select>

{/* about */}
          <label for="about">About : </label>
          <textarea
            name="about"
            id="about"
            cols="60"
            rows="10"
            value={about}
            onChange={(e) => setabout(e.target.value)}
            placeholder="Tell me About yourself :" required
          ></textarea>
{/* reset */}
          <button type='reset' value="reset"
            onClick={(e) => handleReset(e)}>Reset</button>
{/* submit */}
          <button type='submit' value="submit"
            onClick={(e) => handleSubmit(e)}>Submit</button>

        </form>
      </fieldset>
    </div>
  );
}

export default App;
