import sys
import json
from typing import (Dict, List)

sys.path.append('../')

def parse_time(data: Dict[str, List[str]]) -> Dict[str, List[str]]:
  grouped_data: Dict[str, List[str]] = {}
  
  for day, times in data.items():
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

    grouped_data[day] = time_ranges

  return grouped_data
    
def main(args=None):
  try:
    read: str = sys.stdin.read()
    data: Dict[str, str] = json.loads(read)

    data = parse_time(data)
    
    with open('db/storage.json', 'w') as db:
      json.dump(data, db, indent=2)

    print(json.dumps(data))
  except Exception as e:
    print(f'Error: {e}')

if __name__ == '__main__':
  main()