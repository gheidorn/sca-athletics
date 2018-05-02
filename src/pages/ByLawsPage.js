import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// import SportsTable from '../components/SportsTable';

const pathToTitleMappings = {
  '/sports/football': 'Football',
  '/sports/cheerleading': 'Cheerleading',
  '/sports/girls-basketball': 'Girls Basketball',
  '/sports/boys-basketball': 'Boys Basketball',
  '/sports/girls-volleyball': 'Girls Volleyball',
  '/sports/boys-volleyball': 'Boys Volleyball',
  '/sports/soccer': 'Soccer'
};

const byLawPageHeader = {
  textAlign: 'center'
};
const byLawSectionHeader = {
  textAlign: 'right'
};

class ByLawsPage extends Component {
  render() {
    return (
      <div className="bylaws">
        <div className="row">
          <div className="col-md-3" />
          <div className="col-md-6">
            <h3 className="bylawsHeading">St. Catherine of Alexandria Athletic Association By-Laws</h3>
            <h5 className="bylawsSubheading">Founded in 1972 - Revised in October 2017</h5>
            <hr />
          </div>
          <div className="col-md-3" />
        </div>
        <div className="row">
          <div className="col-md-3">
            <h4 className="bylawsArticleHeading">Article I</h4>
          </div>
          <div className="col-md-6">
            <h4 className="bylawsArticleSubheading">Name</h4>
            <p>
              This organization shall be known as the St. Catherine of Alexandria Athletic Association: hereafter
              referred to as the Athletic Association.
            </p>
          </div>
          <div className="col-md-3" />
        </div>
        <div className="row">
          <div className="col-md-3">
            <h4 className="bylawsArticleHeading">Article II</h4>
          </div>
          <div className="col-md-6">
            <h4>Purpose</h4>
            <p>
              The Purpose of this organization is to provide both a competitive and instructional sports program as an
              extension of the St. Catherine of Alexandria academic and religious programs. The Athletic Association
              will assist in the task of educating children to become Christian adults by providing physical training
              and supervised recreation.
            </p>
            <h4>Functions</h4>
            <p>
              Insofar as the operation of the physical and educational facilities of the Parish are concerned, the
              function of the Athletic Association is to maintain and improve the level of physical education and to
              create a better understanding and support of Athletic Education within the framework of the Archdiocese
              regulations.
            </p>
            <h4>Duties</h4>
            <p>The duties of the Athletic Association are as follows:</p>
            <ol>
              <li>Assist the Pastor and the Principal with the school athletic program.</li>
              <li>
                Have approval of Head Coaches. Develop rules the coaches will work under to provide maximum
                participation for the participants.
              </li>
              <li>
                Encourage utilization of outside athletic programs and schedules within the limits of the financial
                budget.
              </li>
              <li>
                Establish guidelines for the evaluation of the program and to evaluate the overall effectiveness of the
                program.
              </li>
              <li>
                Develop guidelines and procedures to regularly monitor and evaluate the coaches in the performance of
                their duties.
              </li>
              <li>Develop and communicate an Emergency Plan for unexpected occurrences at games and practices.</li>
              <li>Establish committees on a standing or ad-hoc basis according to needs.</li>
              <li>
                Perform such other duties as the Athletic Association shall from time to time deem necessary or
                advisable to perform the functions specified above.
              </li>
            </ol>
          </div>
          <div className="col-md-3" />
        </div>
        <div className="row">
          <div className="col-md-3">
            <h4 className="bylawsArticleHeading">Article III</h4>
          </div>
          <div className="col-md-6">
            <h4>Program Eligibility</h4>
            <p>
              All full-time students of St. Catherine's School shall be eligible to participate at the appropriate grade
              levels subject to the requirements established by the Athletic Association and the academic requirements
              established by the school principal. In addition, currently registered CCD students who attended CCD
              classes or had been a full-time student at St. Catherine's the prior year will also be eligible to
              participate in the St. Catherine Football &amp; Soccer programs under the same conditions as afforded
              full-time St. Catherine's students.
            </p>
            <p>
              A child of a St. Catherine school family (family with children who have enrolled in St. Catherine school)
              who is unable to attend St. Catherine due to academic special needs, may also participate in all sports
              programs. The Athletic Board reserves the right to request verification of the special need which
              otherwise prohibits St. Catherine School enrollment. At the discretion of the board, such child may be
              prohibited from St. Catherine team participation if he or she is concurrently playing for their school in
              the same sport.
            </p>
          </div>
          <div className="col-md-3" />
        </div>
        <div className="row">
          <div className="col-md-3">
            <h4 className="bylawsArticleHeading">Article IV</h4>
          </div>
          <div className="col-md-6">
            <h4>Membership</h4>
            <p>
              Members of the Athletic Association shall consist of the Pastor (permanent ex-officio) or his designated
              representative, the Principal (executive, non-voting), the Past President (advisory, non-voting), and 15
              elected members, all registered parishioners to be elected annually for a three (3) year term. Each of the
              voting members shall be entitled to one (1) vote.
            </p>
            <h4>Elections</h4>
            <p>
              Notification of membership vacancies shall be announced to the school families after the January meeting
              by way of the principal e-mail newsletter to school families. Written applications for submitting as a
              candidate will be accepted by the Board Secretary by "cutoff date" in conjunction with the scheduled
              election process.
            </p>
            <p>
              Election of new members shall be held on a date set by the Board and will be conducted via the school
              white envelope distribution system. The ballots will be returned to the school in a sealed envelope to the
              school office when the white envelope is returned by the student within the following 5 days (following
              Tuesday). The school office will gather the ballots, place them in a sealed envelope and deliver them to
              the rectory office on a date determined by the Board. The four Athletic Board officers, as long as they
              are not on the ballot, will count the ballots in the presence of a neutral party in the rectory on the
              same day that the ballots arc sent to the rectory. The Board officers will then release the election
              results to all the candidates as well as the rest of the Board. This will be completed by the May Board
              meeting where the new members can be introduced.
            </p>
            <h4>Terms of Office</h4>
            <p>
              Each member of the Athletic Association shall serve a term of office of three (3) years. The terms shall
              expire in May of each year. No person shall be elected to serve more than six (6) consecutive years as a
              member of the Athletic Association. However, board members that have served 2 consecutive terms may serve
              a 3rd consecutive term if there are not enough new people running to fill all the vacant seats.
            </p>
            <p>
              Any member may resign by tendering written notice of such resignation to the President of the Athletic
              Association. In consecutive meetings or from four (4) regular meetings during the course of the
              Association's year (June through May), without the previous approval of the President of the Association,
              the remaining members may determine and declare that a vacancy exists. Upon declaration, the absent member
              shall be deemed to have resigned.
            </p>
            <h4>Vacancies</h4>
            <p>
              Vacancies of members of the Association, which occur for reason of death, resignation, or any other reason
              than by regular expiration of the te.rm of office, shall be filled for the remainder of the unexpired term
              by a majority of the remaining Athletic Association members.
            </p>
            <h4>Terms of Office</h4>
            <p>
              Athletic Association Board members who coordinates for specific sports are not eligible to be a head coach
              of a team in that particular sport. In addition, the president of the Athletic Association is not eligible
              to be a head coach for a team of any sport.
            </p>
          </div>
          <div className="col-md-3" />
        </div>
        <div className="row">
          <div className="col-md-3">
            <h4 className="bylawsArticleHeading">Article V</h4>
          </div>
          <div className="col-md-6">
            <h4>Officers</h4>
            <p>
              The <Link to="/board">President</Link> shall preside at all regular and special meetings of the Athletic
              Association; schedule to matters to be considered by the Athletic Association before final action; shall
              have the authority to assign (with Association approval) additional duties and responsibilities to
              individual Association members for the furtherance of the program of the Athletic Association.
            </p>
            <p>
              The <Link to="/board">Vice President</Link> shall, in the absence of the President, perform all duties of
              the President.
            </p>
            <p>
              The <Link to="/board">Secretary</Link> shall prepare and distribute an agenda for all meetings; conduct
              official correspondence on behalf of the Athletic Association; maintain a written record of all meetings;
              perform such other duties as directed by the Athletic Association.
            </p>
            <p>
              The <Link to="/board">Treasurer</Link> shall have custody of any funds that the Athletic Association may
              have. She or he must keep an accounting of any and all funds to provide quarterly and annual reports
              including a budget to the Principal and Parish Finance Committee.
            </p>
            <p>
              The position of the <Link to="/board">Past President</Link> is that of an advisory role.
            </p>
          </div>
          <div className="col-md-3" />
        </div>
        <div className="row">
          <div className="col-md-3">
            <h4 className="bylawsArticleHeading">Article VI</h4>
          </div>
          <div className="col-md-6">
            <h4>Meetings</h4>
            <p>
              The Athletic Association shall meet regularly at a date and time to be decided by the Association in a
              Parish meeting hall; all meetings will open. Special Meetings may be called only if a majority of the
              voting members will be in attendance.
            </p>
            <p>
              All meetings of the Athletic Association shall be conducted in accordance with the following order of
              business:
            </p>
            <ul>
              <li>Prayer</li>
              <li>Call to order</li>
              <li>Reading and approval of the minutes</li>
              <li>Treasurer's report</li>
              <li>Unfinished business</li>
              <li>Report of Committees</li>
              <li>Approval of Reports</li>
              <li>New business</li>
              <li>Open Discussion</li>
              <li>Adjournment</li>
              <li>Prayer</li>
            </ul>
            <p>
              The above order of business may be changed, altered, or modified at any meeting by the unanimous vote of
              the members present at said meeting.
            </p>
            <p>
              Robert's Rules of Order shall govern the procedures of the Athletic Association meetings unless specified
              by the Athletic Association.
            </p>
            <p>
              Minutes of the meeting, setting forth all action taken by the Athletic Association, shall be retained as a
              permanent record of the Athletic Association and kept by the Secretary.
            </p>
            <p>
              Any member of the Parish may petition the Athletic Association requesting consideration of any proposal,
              recommendation or any other matter relating to the operation of the Athletic programs of the Parish. Such
              petition may be discussed with any member of the Athletic Association, provided that such petition is
              submitted to the Secretary of the Athletic Association in writing for formal consideration by the Athletic
              Association.
            </p>
            <p>
              The right of non-members to address. the Athletic Association on petitions being acted upon shall be
              limited to those whose petitions have been approved for the agenda in advance of the meeting.
            </p>
          </div>
          <div className="col-md-3" />
        </div>
        <div className="row">
          <div className="col-md-3">
            <h4 className="bylawsArticleHeading">Article VII</h4>
          </div>
          <div className="col-md-6">
            <h4>Quorum</h4>
            <p>
              For the purpose of transacting official business it shall be necessary that at least more than half of the
              voting members of the Athletic Association be present at a meeting in order for a vote to be taken or the
              Athletic Association to call a meeting.
            </p>
            <p>
              In the event that a voting member of the Athletic Association cannot be present for a valid reason, a
              proxy vote for a specific item on the agenda will be accepted other than for the election of new officers.
              This proxy vote must be submitted to any other officer of the Athletic Association in writing prior to the
              meeting.
            </p>
          </div>
          <div className="col-md-3" />
        </div>
        <div className="row">
          <div className="col-md-3" />
          <div className="col-md-6">
            <hr />
          </div>
          <div className="col-md-3" />
        </div>
        <div className="row">
          <div className="col-md-3">
            <h4 className="bylawsArticleHeading">Appendix A</h4>
          </div>
          <div className="col-md-6">
            <h4>Coaching Expectations</h4>
            <p>In order to coach any team at St. Catherine's an individual must meet the following criteria:</p>
            <ol>
              <li>
                Adhere to the criteria of coaches as per the Archdiocese Handbook. The criteria for the selection of
                coaches will include the following:
                <ul>
                  <li>The ability to model Catholic Christian values;</li>
                  <li>The ability to articulate and model the philosophy and goals of the program;</li>
                  <li>The ability to supervise and instruct the youth in his or her care responsibility;</li>
                  <li>An understanding of the basics of the sport to be coached;</li>
                  <li>The ability to develop the potential, confidence, and skills of each athletes and;</li>
                  <li>The ability to separate winning from the more important goals and values of the program.</li>
                </ul>
              </li>
              <li>Submit to and pass the Archdiocese criminal background check and Virtus Training.</li>
              <li>Complete the Archdiocese Volunteer application.</li>
              <li>Clearly inform players and parents of "playing time" philosophy.</li>
              <li>Adhere to all Southside Conference and various league and tournament rules and regulations.</li>
              <li>
                Maintain and communicate to each team and Emergency Plan for unexpected occurrences at games and
                practices.
              </li>
            </ol>
            <h4>Coach Selection Guidelines</h4>
            <p>When selecting coaches for our teams, an attempt should be made to follow the guidelines below:</p>
            <ul>
              <li>A notice of coaching vacancy shall be posted in the school e-newsletter.</li>
              <li>The sport coordinator shall gather names of candidates.</li>
              <li>
                If there is more than one candidate for a position, candidates should submit a letter providing further
                detail about their qualifications.
              </li>
              <li>Coaches must complete concussion awareness cert and background checks.</li>
              <li>All candidates must have completed the Virtus training.</li>
              <li>The Association votes for the best qualified candidate.</li>
              <li>Head coaches may pick their own fully qualified assistant, to be approved by the association.</li>
            </ul>
          </div>
          <div className="col-md-3" />
        </div>
      </div>
    );
  }
}

export default ByLawsPage;
