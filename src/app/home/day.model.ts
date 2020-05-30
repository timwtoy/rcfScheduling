export class TimeOfDay {
    beginningTime: number;
    lengthOfTime: TimeLengthOption;
    currentDay: string;
    id?: string;
    name?: string;
    email?: string;
    slotsOpen?: number;
    formattedDisplay?: string;
}

export enum TimeLengthOption {
    SIXTY = 0,
    NINETY = 1
}

export const TotalSlotsAvailable: number = 20;

export const timeSlots: TimeOfDay[] = [
    {
        beginningTime: 5,
        lengthOfTime: TimeLengthOption.SIXTY,
        currentDay: '',
        slotsOpen: TotalSlotsAvailable
    },
    {
        beginningTime: 5.5,
        lengthOfTime: TimeLengthOption.SIXTY,
        currentDay: '',
        slotsOpen: TotalSlotsAvailable
    },
    {
        beginningTime: 6,
        lengthOfTime: TimeLengthOption.SIXTY,
        currentDay: '',
        slotsOpen: TotalSlotsAvailable
    },
    {
        beginningTime: 6.5,
        lengthOfTime: TimeLengthOption.SIXTY,
        currentDay: '',
        slotsOpen: TotalSlotsAvailable
    },
    {
        beginningTime: 7,
        lengthOfTime: TimeLengthOption.SIXTY,
        currentDay: '',
        slotsOpen: TotalSlotsAvailable
    },
    {
        beginningTime: 7.5,
        lengthOfTime: TimeLengthOption.SIXTY,
        currentDay: '',
        slotsOpen: TotalSlotsAvailable
    },
    {
        beginningTime: 8,
        lengthOfTime: TimeLengthOption.SIXTY,
        currentDay: '',
        slotsOpen: TotalSlotsAvailable
    },
    {
        beginningTime: 8.5,
        lengthOfTime: TimeLengthOption.SIXTY,
        currentDay: '',
        slotsOpen: TotalSlotsAvailable
    },
    {
        beginningTime: 9,
        lengthOfTime: TimeLengthOption.SIXTY,
        currentDay: '',
        slotsOpen: TotalSlotsAvailable
    },
    {
        beginningTime: 9.5,
        lengthOfTime: TimeLengthOption.SIXTY,
        currentDay: '',
        slotsOpen: TotalSlotsAvailable
    },
    {
        beginningTime: 10,
        lengthOfTime: TimeLengthOption.SIXTY,
        currentDay: '',
        slotsOpen: TotalSlotsAvailable
    },
    {
        beginningTime: 10.5,
        lengthOfTime: TimeLengthOption.SIXTY,
        currentDay: '',
        slotsOpen: TotalSlotsAvailable
    },
    {
        beginningTime: 11,
        lengthOfTime: TimeLengthOption.SIXTY,
        currentDay: '',
        slotsOpen: TotalSlotsAvailable
    },
    {
        beginningTime: 11.5,
        lengthOfTime: TimeLengthOption.SIXTY,
        currentDay: '',
        slotsOpen: TotalSlotsAvailable
    },
    {
        beginningTime: 12,
        lengthOfTime: TimeLengthOption.SIXTY,
        currentDay: '',
        slotsOpen: TotalSlotsAvailable
    },
    {
        beginningTime: 12.5,
        lengthOfTime: TimeLengthOption.SIXTY,
        currentDay: '',
        slotsOpen: TotalSlotsAvailable
    },
    {
        beginningTime: 13,
        lengthOfTime: TimeLengthOption.SIXTY,
        currentDay: '',
        slotsOpen: TotalSlotsAvailable
    },
    {
        beginningTime: 13.5,
        lengthOfTime: TimeLengthOption.SIXTY,
        currentDay: '',
        slotsOpen: TotalSlotsAvailable
    },
    {
        beginningTime: 14,
        lengthOfTime: TimeLengthOption.SIXTY,
        currentDay: '',
        slotsOpen: TotalSlotsAvailable
    },
    {
        beginningTime: 14.5,
        lengthOfTime: TimeLengthOption.SIXTY,
        currentDay: '',
        slotsOpen: TotalSlotsAvailable
    },
    {
        beginningTime: 15,
        lengthOfTime: TimeLengthOption.SIXTY,
        currentDay: '',
        slotsOpen: TotalSlotsAvailable
    },
    {
        beginningTime: 15.5,
        lengthOfTime: TimeLengthOption.SIXTY,
        currentDay: '',
        slotsOpen: TotalSlotsAvailable
    },
    {
        beginningTime: 16,
        lengthOfTime: TimeLengthOption.SIXTY,
        currentDay: '',
        slotsOpen: TotalSlotsAvailable
    },
    {
        beginningTime: 16.5,
        lengthOfTime: TimeLengthOption.SIXTY,
        currentDay: '',
        slotsOpen: TotalSlotsAvailable
    },
    {
        beginningTime: 17,
        lengthOfTime: TimeLengthOption.SIXTY,
        currentDay: '',
        slotsOpen: TotalSlotsAvailable
    },
    {
        beginningTime: 17.5,
        lengthOfTime: TimeLengthOption.SIXTY,
        currentDay: '',
        slotsOpen: TotalSlotsAvailable
    },
    {
        beginningTime: 18,
        lengthOfTime: TimeLengthOption.SIXTY,
        currentDay: '',
        slotsOpen: TotalSlotsAvailable
    },
    {
        beginningTime: 18.5,
        lengthOfTime: TimeLengthOption.SIXTY,
        currentDay: '',
        slotsOpen: TotalSlotsAvailable
    },
    {
        beginningTime: 19,
        lengthOfTime: TimeLengthOption.SIXTY,
        currentDay: '',
        slotsOpen: TotalSlotsAvailable
    },
    {
        beginningTime: 19.5,
        lengthOfTime: TimeLengthOption.SIXTY,
        currentDay: '',
        slotsOpen: TotalSlotsAvailable
    },
    {
        beginningTime: 20,
        lengthOfTime: TimeLengthOption.SIXTY,
        currentDay: '',
        slotsOpen: TotalSlotsAvailable
    },
    {
        beginningTime: 20.5,
        lengthOfTime: TimeLengthOption.SIXTY,
        currentDay: '',
        slotsOpen: TotalSlotsAvailable
    },
    {
        beginningTime: 21,
        lengthOfTime: TimeLengthOption.SIXTY,
        currentDay: '',
        slotsOpen: TotalSlotsAvailable
    }
];