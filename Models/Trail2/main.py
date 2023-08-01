import json

# Step 1: Inserting Data from JSON file
with open("teacherTimetable.json","r") as ttt:
    teacherTT=json.load(ttt)


# Step 2: Inputs for absent teacher
abName=input("Enter name of Absent Teacher: ")
abDay=input("Day when the teacher is absent: ")

# Step 3: Getting classes of absent teacher
def absent_teacher(name,day):

    # Getting classes of absent teacher and its lecture number
    absentTeacherClass=[]   
    absentTeacherClassNumber=[]
    for absClass in day:
        # print(absClass)
        if absClass.split(":")[1]=='class': 
            absentTeacherClass.append(absClass)
            absentTeacherClassNumber.append(absClass.split(":")[0])
            # print(absentTeacherClass)
            # print(absentTeacherClassNumber)
            # So we got classes of Absent Teacher
        # return day

# Step 4: Checking free classes for other teachers
    presentT=[]
    for presentTeachers in teacherTT["teachers"]:
        presentT.append(presentTeachers)

        for absentT in presentT:
            if absentT==abName:
                presentT.remove(absentT)
        
    #     print(len(presentT))
    # print(len(presentT))
    i=0
    presentTeacherClass=[]
    presentTeacherClassNumber=[]

# Step 5: With values of absent teacher's lecture, scanning for teacher who have free lecture

    # Getting free lectures of present teachers
    while i<len(presentT):
        for freeClasses in teacherTT["teachers"][presentT[i]][abDay]:
            # print(freeClasses)
            if freeClasses.split(":")[1]=='free':
                presentTeacherClass.append(freeClasses)
                presentTeacherClassNumber.append(freeClasses.split(":")[0])
                # print(presentTeacherClass)
                # print(presentTeacherClassNumber)
                # print(f'i={i}')
    # Matching free lectures against absent teacher's lectures (proxy setting)
            for absValues in absentTeacherClassNumber:
                for preValues in presentTeacherClassNumber:
                    # print(absValues, preValues)
                    if absValues==preValues:
                        absentTeacherClassNumber.remove(absValues)
                        # print(absValues, preValues)
                        # print(f'i=={i}')
                        # print(absValues, absentTeacherClassNumber)
                        print(f'Got Substitute teacher for {abName} during {absValues} lecture as {presentT[i]} have their {preValues} lecture free')
                    # if absValues!=preValues:
                    #     print(f"Couldn't find sustitute for lecture {absValues}")
        i=i+1

# Step 6: Check where if there is no free lecture for absent teacher's lecture
    for noLecture in absentTeacherClassNumber:
            print(f"Couldn't find sustitute for lecture {noLecture}")


absent_teacher(teacherTT["teachers"][abName],teacherTT["teachers"][abName][abDay])
# teacherFreeClass()
# print(teacherTT["Ms.Vandana"]['Monday'])
