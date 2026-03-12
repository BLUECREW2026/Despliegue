import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function Calendario({ value, setValue }) {
    return (
        <div className="datepicker-container">
            <DatePicker
                className="form-control bg-white"
                selected={value.start}
                startDate={value.start}
                endDate={value.end}
                selectsRange={true}
                dateFormat="dd-MM-yyyy"
                onChange={(update) => {
                    const [start, end] = update;
                    setValue({ start, end });
                }}
            />
        </div>
    );
}
