-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Groups" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "year" INTEGER NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "activeFrom" DATETIME NOT NULL
);
INSERT INTO "new_Groups" ("activeFrom", "createdAt", "id", "name", "year") SELECT "activeFrom", "createdAt", "id", "name", "year" FROM "Groups";
DROP TABLE "Groups";
ALTER TABLE "new_Groups" RENAME TO "Groups";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
