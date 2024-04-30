
import  "./Quiz.css"
import React from 'react'
import AccountingProf from "./allCategories/professional/acct/AccountingProf";
import ProjectMgtProf from "./allCategories/professional/project/ProjectMgtProf";
import IctProf from "./allCategories/professional/ict/IctProf";
import LogisticsProf from "./allCategories/professional/logic/LogisticsProf";
import HumanRProf from "./allCategories/professional/hr/HumanRProf";
import BusinessAdminProf from "./allCategories/professional/bizAdmin/BusinessAdminProf";
import MarketingProf from "./allCategories/professional/mrkt/MarketingProf";
import AddQuestionsProf from "./allCategories/professional/addQuest/AddQuestionsProf";
import  Accounting  from "./allCategories/entryLevel/acct/Accounting";
import AddQuestions from "./allCategories/entryLevel/addQuest/AddQuestions";
import BusinessAdmin from "./allCategories/entryLevel/bizAdmin/BusinessAdmin";
import HumanR from "./allCategories/entryLevel/hr/HumanR";
import  Ict  from "./allCategories/entryLevel/ict/Ict";
import Logistics from "./allCategories/entryLevel/logic/Logistics";
import Marketing from "./allCategories/entryLevel/mrkt/Marketing";
import ProjectMgt from "./allCategories/entryLevel/project/ProjectMgt";

const Quiz = () => {
  return (
    <div className= 'all_prof'>
       <div className= 'categories-body' >
          <h2 id='Et'>Entry Level</h2>
         <div className= 'allQuiz'>
              <ProjectMgt/>
              <Ict/>
              <Accounting/>
              <Logistics/>
              <HumanR/>
              <BusinessAdmin/>
              <Marketing/>
             <AddQuestions/>
           </div>
        </div>
        <div className= 'categories-body2' >
           <h2 id='pl'>Professional Level</h2>
           <div className= 'allQuiz2'>
              <ProjectMgtProf/>
              <IctProf/>
              <AccountingProf/>
              <LogisticsProf/>
              <HumanRProf/>
              <BusinessAdminProf/>
              <MarketingProf/>
              <AddQuestionsProf/>
            </div>
          </div>
        </div>
  )
}

export default Quiz;












