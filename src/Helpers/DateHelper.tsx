
import { format } from 'date-fns'

const DateHelper = () => {
    const formatDateYMD = (date: Date | null) : string => {
        return date ? format(new Date(date), 'yyyy-MM-dd') : "--";
    }
    
    return {formatDateYMD}
}

export default DateHelper
