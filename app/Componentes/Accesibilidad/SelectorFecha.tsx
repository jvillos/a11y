import {
  Button,
  Calendar,
  CalendarCell,
  CalendarGrid,
  CalendarGridBody,
  CalendarGridHeader,
  CalendarHeaderCell,
  DateInput,
  DatePicker,
  DateSegment,
  Dialog,
  FieldError,
  Group,
  Heading,
  Label,
  Popover,
  Text,
} from "react-aria-components";

export default function SelectorFecha() {
  return (
    <div className="max-w-sm mx-auto mt-10 text-sm">
      <DatePicker className="space-y-2 w-full">
        <Label className="text-gray-800 dark:text-gray-200">
          Selecciona una fecha
        </Label>

        <Group className="flex items-center px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 focus-within:ring-2 focus-within:ring-cyan-500">
          <DateInput className="flex gap-1 text-gray-900 dark:text-gray-100">
            {(segment) => (
              <DateSegment
                segment={segment}
                className="px-1 rounded focus:outline-none focus:bg-cyan-100 dark:focus:bg-cyan-700"
              />
            )}
          </DateInput>
          <Button className="ml-auto px-1 text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white">
            ▼
          </Button>
        </Group>

        <Text
          slot="description"
          className="text-xs text-gray-500 dark:text-gray-400"
        >
          Usa el calendario o escribe una fecha manualmente.
        </Text>
        <FieldError className="text-sm text-red-600 dark:text-red-400" />

        <Popover
          className="z-50 mt-2 border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 rounded-md shadow-lg"
          style={{ minWidth: "280px" }} // asegura un ancho adecuado
        >
          <Dialog className="p-4 w-full">
            <Calendar className="space-y-3 w-full">
              <div className="flex justify-between items-center mb-2">
                <Button
                  slot="previous"
                  className="px-2 py-1 rounded hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  ◀
                </Button>
                <Heading className="text-base font-medium text-gray-800 dark:text-gray-100" />
                <Button
                  slot="next"
                  className="px-2 py-1 rounded hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  ▶
                </Button>
              </div>

              <CalendarGrid className="w-full">
                <CalendarGridHeader>
                  {(day) => (
                    <CalendarHeaderCell className="text-xs font-medium text-center text-gray-500 dark:text-gray-400 flex items-center justify-center" />
                  )}
                </CalendarGridHeader>
                <CalendarGridBody>
                  {(date) => (
                    <CalendarCell
                      date={date}
                      className={({ isSelected, isFocused }) =>
                        `w-9 h-9 flex items-center justify-center rounded text-sm ${
                          isSelected
                            ? "bg-cyan-600 text-white"
                            : isFocused
                            ? "bg-cyan-100 dark:bg-cyan-700"
                            : "hover:bg-gray-100 dark:hover:bg-gray-700"
                        }`
                      }
                    />
                  )}
                </CalendarGridBody>
              </CalendarGrid>

              <Text
                slot="errorMessage"
                className="text-sm text-red-600 dark:text-red-400"
              />
            </Calendar>
          </Dialog>
        </Popover>
      </DatePicker>
    </div>
  );
}
