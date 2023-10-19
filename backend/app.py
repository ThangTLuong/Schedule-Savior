import sys
import json
from typing import (Dict, List)
from tinydb import TinyDB, Query

sys.path.append('../')

def parse_time(data: Dict[str, str | Dict[str, List[str]]]) -> Dict[str, str | Dict[str, List[str]]]:
  # grouped_data: Dict[str, str | Dict[str, List[str]]] = {}
  
  # professor: str = data['professor']
  schedule: Dict[str, List[str]] = data['schedule']
  
  for day, times in schedule.items():
    time_ranges: List[str] = []
    start_time: str = ''
    end_time: str = ''
    is_range_open: bool = False

    for time in times:
      former_time = time.split(' - ')[0]
      latter_time = time.split(' - ')[1]

      if not start_time:
        start_time = former_time
        end_time = latter_time
        is_range_open = True
      elif end_time == former_time:
        end_time = latter_time
      else:
        if is_range_open:
          time_ranges.append(f"{start_time} - {end_time}")
        start_time = former_time
        end_time = latter_time
        is_range_open = True

    if is_range_open:
      time_ranges.append(f"{start_time} - {end_time}")

    data['schedule'][day] = time_ranges
  # return grouped_data
    
def main(args=None):
  try:
    read: str = sys.stdin.read()
    data: Dict[str, str | Dict[str, List[str]]] = json.loads(read)
    
    parse_time(data)
    
    with TinyDB('db/storage.json', indent=2) as db:
      professor = Query()
      
      if db.contains(professor.professor == data['professor']):
        db.update({'schedule': data['schedule']}, professor.professor == data['professor'])
      else:
        db.insert(data)

  except Exception as e:
    print(f'Error: {e}')

if __name__ == '__main__':
  main()