import json

# Step 1: Data loading from the JSON file
with open("teachers_schedule.json", "r") as file:
    teachers_data = json.load(file)

# Step 2: Function to find substitute teachers for the whole day
def find_substitute_teachers(absent_teacher, day):
    substitute_teachers = {}

    for hour in range(8, 15):  # Assuming classes from 8 am to 2 pm (15:00)
        for minute in [0, 45]:
            time = f"{hour:02d}:{minute:02d}"

            potential_substitutes = []

            for teacher, data in teachers_data.items():
                if teacher != absent_teacher:
                    classes = data['schedule'].get(day, [])
                    is_free = True

                    for class_entry in classes:
                        class_start = class_entry['start_time']
                        class_end = class_entry['end_time']

                        if class_start <= time < class_end:
                            is_free = False
                            break

                    if is_free:
                        potential_substitutes.append(teacher)

            substitute_teachers[time] = potential_substitutes

    return substitute_teachers

# Step 3: Function to display the result in the CLI
def show_result():
    absent_teacher = input("Enter the name of the absent teacher: ")
    day = input("Enter the day (e.g., Monday): ")

    # Check for available substitute teachers for the whole day
    substitute_teachers = find_substitute_teachers(absent_teacher, day)

    if any(substitute_teachers.values()):
        print(f"Substitute teacher(s) available for {absent_teacher}'s classes on {day}:")
        for time, substitutes in substitute_teachers.items():
            if substitutes:
                print(f"At {time} -- {', '.join(substitutes)} is/are free.")
            else:
                print(f"At {time} -- No substitute available.")
    else:
        print(f"No substitute teacher available for {absent_teacher}'s classes on {day}.")

# Step 4: Call the show_result() function to get user input and display the result
show_result()
