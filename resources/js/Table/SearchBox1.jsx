
import { useEffect, useState } from "react";
import axios from "axios";

//states of the search SearchBox
//Pure state the untouched one
//Garbage state touched but never connected
//Used state first connection
const SearchBox1 = ({ response, searchLink, updateResponse }) => {
  //state of the search Box
  const [searchState, changeSearchState] = useEffect('pure');

  //function for fetching <datalist>
  async function fetchData(query) {
    const url = searchLink + query;
    try {
      const responseData = await axios.get(url);
      setBackupResponse(response)
      updateResponse(responseData)
    } catch (error) {

    }
  }
  //For bakingUp the inital response
  const [backupResponse, setBackupResponse] = useState(null)
  useEffect(() => {
    console.log(backupResponse)

  }, [backupResponse])


  //1.Filtering the search query
  const [searchQuery, setSearchQuery] = useState("");
  useEffect(() => {
    if (searchQuery === "") {
      updateResponse(backupResponse)
    }
    else {
      (setFilteredSearchQuery((searchQuery.trim())))
    }
  }, [searchQuery])

  //2.searching the Filetered searchQuery
  const [filteredSearchQuery, setFilteredSearchQuery] = useState("");
  useEffect(() => {
    if (filteredSearchQuery !== '') {
      fetchData(filteredSearchQuery)
    }
    if (filteredSearchQuery == '') {
    }
  }, [filteredSearchQuery])



  //Spare function
  // const fetchData = async (query) => {
  //   const url = searchLink + query;
  //   const responseData = await axios.get(url);
  //   setResult(responseData);
  // };
  // useEffect(() => {
  //   if (result != null) {
  //     if (backupResponse === null) {
  //       setBackupResponse(response);
  //     }
  //     updateResponse(result);
  //   }
  // }, [result]);
  //
  //3.Fetching data with filtered Search Query


  {/*
    State of Search Box(pure,garbage,connect,recycle,devovle)
    //store the inital state
    event->change in input field
    mainChangeEntites->filteredOutput
    f(event)->fileteredOuptut
    f(fileteredOutput)->change the state.
    

    Result of State change
    if(state pure)->no change to response(MainResponse)    
     pure-to-garbage->no change to response
     pure-to-connenct->set  mainResponse->connect to the response  

    if(connect)->change the responsetoFectch
     connect->recycle-> bakcupResponse set response f(backupResponse)
     recyle->devovle-> backupResponse set response f(backupResponse) 

     devovle->pure->mainResponse-
     

     Determine the this.state.
     intial state ->pure = A
     (if unwanted data is set)->garbage = A
     (if useful change after pure or garbage)->connect = A
     (if newData is set After connect )->recycle
     (if backspace is found after )-> devovle

     */
  }
  return (
    <div>
      <div className="m-2">
        <div>
          <input
            type="text"
            onChange={(e) => setSearchQuery(e.target.value)}
            value={searchQuery}
            name="search"
            placeholder="search"
            className=" p-2 text-lg rounded border-solid border border-green-100"
          />
        </div>
      </div>
    </div>
  );
};

export default SearchBox1;

