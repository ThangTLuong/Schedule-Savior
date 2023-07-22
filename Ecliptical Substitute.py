import json
import re

# Step 1: Data loading from the JSON file
with open("teachers_schedule.json", "r") as file:
    teachers_data = json.load(file)

# Step 2: Function to find substitute teachers
def find_substitute_teacher(absent_teacher, day, time):
    potential_substitutes = []
    class_duration = 45  # Class duration in minutes

    # Convert input time to minutes for comparison
    time_hours, time_minutes, period = re.match(r"(\d{1,2}):(\d{2})\s*(AM|PM)", time).groups()
    time_hours = int(time_hours) + 12 if period == "PM" else int(time_hours)
    input_time_minutes = time_hours * 60 + int(time_minutes)

    for teacher, data in teachers_data.items():
        if teacher != absent_teacher:
            # Check if the teacher has any classes scheduled at the specified day and time
            for class_entry in data['schedule'].get(day, []):
                class_start_hours, class_start_minutes, class_start_period = re.match(r"(\d{1,2}):(\d{2})\s*(AM|PM)", class_entry['start_time']).groups()
                class_end_hours, class_end_minutes, class_end_period = re.match(r"(\d{1,2}):(\d{2})\s*(AM|PM)", class_entry['end_time']).groups()

                class_start_hours = int(class_start_hours) + 12 if class_start_period == "PM" else int(class_start_hours)
                class_end_hours = int(class_end_hours) + 12 if class_end_period == "PM" else int(class_end_hours)

                class_start_minutes = class_start_hours * 60 + int(class_start_minutes)
                class_end_minutes = class_end_hours * 60 + int(class_end_minutes)

                # Check if the input time falls within the class time range
                if class_start_minutes <= input_time_minutes < class_end_minutes:
                    break  # Teacher has a class scheduled during the input time
            else:
                potential_substitutes.append(f"{teacher} (Free)")

    return potential_substitutes

# Step 3: Main function
def main():
    absent_teacher = input("Enter the name of the absent teacher: ")
    day_time_input = input("Enter the day and time of the class the teacher is absent (e.g., Monday:8:00 AM): ")

    # Use regular expression to extract day and time separately
    pattern = r'(\w+):\s*(\d{1,2}:\d{2}\s*[APM]{2})'
    day_time_match = re.match(pattern, day_time_input.strip())

    if not day_time_match:
        print("Invalid input format. Please provide the day and time in the format 'Monday:8:00 AM'.")
        return

    day, time = day_time_match.groups()

    # Check for available substitute teachers
    potential_substitutes = find_substitute_teacher(absent_teacher, day, time)

    if potential_substitutes:
        print(f"Potential substitute teacher(s) for {absent_teacher}'s class at {day_time_input}:")
        print("\n".join(potential_substitutes))
    else:
        print(f"No substitute teacher available for {absent_teacher}'s class at {day_time_input}.")

if __name__ == "__main__":
    main()
