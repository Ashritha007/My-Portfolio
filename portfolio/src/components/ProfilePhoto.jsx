// Place your photo at src/assets/profile.jpg (or .jpeg / .png / .webp). If it is missing, initials are shown.
const found = import.meta.glob("../assets/profile.{jpg,jpeg,png,webp}", { eager: true, query: "?url", import: "default" });
const photo = Object.values(found)[0];

export default function ProfilePhoto() {
  return (
    <div className="photo-frame">
      {photo ? <img src={photo} alt="Ashritha Dabbiru" /> : <span className="initials" aria-label="Profile photo placeholder">AD</span>}
    </div>
  );
}
