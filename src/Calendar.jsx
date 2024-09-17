import React from "react";
import Event from "./Event";

const Calendar = () => {
  return (
    <div className="Calendar">
      <table>
        <thead>
          <tr>
            <th></th>
            <th>Sunday</th>
            <th>Monday</th>
            <th>Tuesday</th>
            <th>Wednesday</th>
            <th>Thursday</th>
            <th>Friday</th>
            <th>Saturday</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="time">8am</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td className="time">9am</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td className="time">10am</td>
            <td></td>
            <Event event = 'Walk Dog' color = "blue" location = "Lincoln Park"/>
            <Event event = 'Walk Dog' color = "blue" location = "Lincoln Park"/>
            <Event event = 'Walk Dog' color = "blue" location = "Lincoln Park"/>
            <Event event = 'Walk Dog' color = "blue" location = "Lincoln Park"/>
            <Event event = 'Walk Dog' color = "blue" location = "Lincoln Park"/>
            <td></td>
          </tr>
          <tr>
            <td className="time">11am</td>
            <td></td>
            <Event event = 'Math Class' color = "green" location = "Tech Institute"/>
            <td></td>
            <Event event = 'Math Class' color = "green" location = "Tech Institute"/>
            <td></td>
            <Event event = 'Math Class' color = "green" location = "Tech Institute"/>
            <td></td>
          </tr>
          <tr>
            <td className="time">12pm</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td className="time">1pm</td>
            <td></td>
            <td></td>
            <Event event = 'Go for Run' color = "pink" location = "Lincoln Park"/>
            <td></td>
            <Event event = 'Go for Run' color = "pink" location = "Lincoln Park"/>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td className="time">2pm</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td className="time">3pm</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td className="time">4pm</td>
            <td></td>
            <Event event = 'Gym' color = "pink" location = "SFitness"/>
            <td></td>
            <Event event = 'Gym' color = "pink" location = "SFitness"/>
            <td></td>
            <Event event = 'Gym' color = "pink" location = "SFitness"/>
            <td></td>
          </tr>
          <tr>
            <td className="time">5pm</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>

        </tbody>
      </table>
    </div>
  );
};

export default Calendar;
