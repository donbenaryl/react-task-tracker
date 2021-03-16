
import { format } from 'date-fns'

export const formatDateYMD = (date: Date | null) : string => {
    return date ? format(new Date(date), 'yyyy-MM-dd') : "--";
}
    