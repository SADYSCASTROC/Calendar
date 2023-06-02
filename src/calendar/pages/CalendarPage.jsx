import { Calendar } from 'react-big-calendar'
import 'react-big-calendar/lib/css/react-big-calendar.css'

import { Navbar } from '../components/Navbar'
import { addHours } from 'date-fns'
import { localizer } from '../../helpers/calendarLocalizer'
import { getMessagesEs } from '../../helpers/getMessages'
import { CalendarEvent } from '../components/CalendarEvent'



const events = [{
  title: 'cumpleaños de mario',
  notes: 'Hay que comprar el pastel',
  start: new Date(),
  end: addHours(new Date(), 2),
  bgColor: '#fafafa',
  user: {
    _id: '123',
    name: 'Sadys'
  }
}]


export const CalendarPage = () => {

  const eventStyleGetter = (event, start, end, isSelected) => {

    const style ={
      backgroundColor: '#D133FF',
      borderRadius: '10px',
      color:'white',
    }

    return {
      style
    }
  }

  return (
    <>
      <Navbar />

      <div>
        <Calendar
          culture='es'
          localizer={localizer}
          events={events}
          startAccessor="start"
          endAccessor="end"
          style={{ height: 'calc( 100vh - 80px )' }}
          messages={getMessagesEs()}
          eventPropGetter={eventStyleGetter}
          components={{
            event: CalendarEvent
          }}
        />
      </div>
    </>
  )
}
