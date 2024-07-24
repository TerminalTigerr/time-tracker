import { v4 as uuidv4 } from 'uuid'

export function renderElapsedString(elapsed: number, runningSince?: null | number) {
  let totalElapsed = elapsed
  if (runningSince) {
    totalElapsed += Date.now() - runningSince;
  }
  return millisecondsToHuman(totalElapsed);
}

function millisecondsToHuman(ms: number) {
  const seconds = Math.floor((ms / 1000) % 60);
  const minutes = Math.floor((ms / 1000 / 60) % 60);
  const hours = Math.floor(ms / 1000 / 60 / 60);

  const humanized = [
    pad(hours.toString(), 2),
    pad(minutes.toString(), 2),
    pad(seconds.toString(), 2),
  ].join(':');

  return humanized;
}
function pad(numberString: string, size: number) {
  let padded = numberString;
  while (padded.length < size) padded = `0${padded}`;
  return padded;
}

interface Timers {
  id: string
  title: string
  project: string
  elapsed: number
  runningSince: number | null
}

export function newTimer(attr: {id?: string, title: string, project:string}) {
  const timer: Timers = {
    id: uuidv4() || attr.id,
    title: attr.title || 'Title',
    project: attr.project || 'Project',
    elapsed: 0,
    runningSince: Date.now()
  }
  return timer
}