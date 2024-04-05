import { Testing } from './testing'

export default function Page() {
  return (
    <main>

        hi

        <div>
          <Testing submittedData={{
          projectid: '',
          collection: '',
          distribution: '',
          quality: '',
          split: '',
          bias: '',
          influence: '',
          outcome: ''
        }} />
        </div>

    </main>
  );
}
